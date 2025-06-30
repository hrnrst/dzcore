<?php
namespace Liman\Toolkit\OS;

use Liman\Toolkit\Shell\Command;

class Distro
{
	/**
	 * Options came from chain methods
	 *
	 * @var array
	 */
	private $options = [];

	/**
	 * Default option
	 *
	 * @var mixed
	 */
	private $default = false;

	/**
	 * Current instance
	 *
	 * @var Distro
	 */
	private static $instance = null;

	/**
	 * Current DistroInfo instance
	 *
	 * @var DistroInfo
	 */
	private static $distroInfo = null;

	/**
	 * Current engine
	 *
	 * @var ICommandEngine
	 */
	private static $currentEngine = null;

	/**
	 * Call getDistro function when it's initialized.
	 *
	 * @return void
	 */
	public function __construct()
	{
		self::getDistro();
	}

	/**
	 * Check if not exist current static distro info and engine, then load them.
	 *
	 * @return DistroInfo
	 */
	public static function getDistro()
	{
		if (
			self::$distroInfo == null ||
			self::$currentEngine != Command::getEngine()
		) {
			self::$distroInfo = new DistroInfo();
			self::$currentEngine = Command::getEngine();
		}
		return self::$distroInfo;
	}

	/**
	 * Get suitable option according to current distro info.
	 *
	 * @return mixed
	 */
	public function get()
	{
		$distro = self::getDistro();
		if (isset($this->options[$distro->slug])) {
			return $this->options[$distro->slug];
		} elseif (isset($this->options[$distro->majorSlug])) {
			return $this->options[$distro->majorSlug];
		} elseif (isset($this->options[$distro->distroID])) {
			return $this->options[$distro->distroID];
		} elseif (isset($this->options[$distro->base])) {
			return $this->options[$distro->base];
		}
		return $this->default;
	}

	/**
	 * Run suitable option as a command.
	 *
	 * @param  array  $attributes
	 * @return string
	 */
	public function run($attributes = [])
	{
		$result = $this->get();
		if (!$result) {
			return false;
		}
		return Command::run($result, $attributes);
	}

	/**
	 * Run suitable option as a command as root.
	 *
	 * @param  array  $attributes
	 * @return string
	 */
	public static function runSudo($command = null, $attributes = [])
{
    $logFile = '/tmp/runsudo_debug.txt';
    $timestamp = date('Y-m-d H:i:s');
    
    // Başlangıç log'u
    file_put_contents($logFile, "\n=== runSudo START [$timestamp] ===\n", FILE_APPEND);
    file_put_contents($logFile, "Input command: " . var_export($command, true) . "\n", FILE_APPEND);
    file_put_contents($logFile, "Input attributes: " . var_export($attributes, true) . "\n", FILE_APPEND);
    file_put_contents($logFile, "Engine class: " . (isset(self::$engine) ? self::$engine : 'NOT SET') . "\n", FILE_APPEND);
    
    try {
        // Command kontrolü
        if ($command === null || $command === '') {
            file_put_contents($logFile, "ERROR: Command is null or empty\n", FILE_APPEND);
            return false;
        }
        
        // Engine kontrolü
        if (!isset(self::$engine)) {
            file_put_contents($logFile, "ERROR: Engine not set\n", FILE_APPEND);
            return false;
        }
        
        if (!class_exists(self::$engine)) {
            file_put_contents($logFile, "ERROR: Engine class does not exist: " . self::$engine . "\n", FILE_APPEND);
            return false;
        }
        
        // Sudo prefix alma
        file_put_contents($logFile, "Getting sudo prefix from engine...\n", FILE_APPEND);
        $sudoPrefix = self::$engine::sudo();
        file_put_contents($logFile, "Sudo prefix: " . var_export($sudoPrefix, true) . "\n", FILE_APPEND);
        
        // Full command oluşturma
        $fullCommand = $sudoPrefix . $command;
        file_put_contents($logFile, "Full command: " . var_export($fullCommand, true) . "\n", FILE_APPEND);
        
        // Komutu çalıştırma
        file_put_contents($logFile, "Executing command via self::run()...\n", FILE_APPEND);
        $output = self::run($fullCommand, $attributes);
        file_put_contents($logFile, "Command output type: " . gettype($output) . "\n", FILE_APPEND);
        file_put_contents($logFile, "Command output: " . var_export($output, true) . "\n", FILE_APPEND);
        
        // Sonuç kontrolü
        if (is_array($output)) {
            file_put_contents($logFile, "WARNING: Output is array, converting to string\n", FILE_APPEND);
            $output = implode("\n", $output);
        }
        
        file_put_contents($logFile, "Final output: " . var_export($output, true) . "\n", FILE_APPEND);
        file_put_contents($logFile, "=== runSudo SUCCESS ===\n\n", FILE_APPEND);
        
        return $output;
        
    } catch (\Throwable $e) {
        file_put_contents($logFile, "EXCEPTION caught:\n", FILE_APPEND);
        file_put_contents($logFile, "  Class: " . get_class($e) . "\n", FILE_APPEND);
        file_put_contents($logFile, "  Message: " . $e->getMessage() . "\n", FILE_APPEND);
        file_put_contents($logFile, "  File: " . $e->getFile() . "\n", FILE_APPEND);
        file_put_contents($logFile, "  Line: " . $e->getLine() . "\n", FILE_APPEND);
        file_put_contents($logFile, "  Trace: " . $e->getTraceAsString() . "\n", FILE_APPEND);
        file_put_contents($logFile, "=== runSudo FAILED ===\n\n", FILE_APPEND);
        
        return false;
    }
}

	/**
	 * Set default option.
	 *
	 * @param  mixed  $default
	 * @return mixed
	 */
	public function default($default)
	{
		$this->default = $default;
		return $this;
	}

	/**
	 * Add chained methods as option.
	 *
	 * @param  string  $method
	 * @param  array  $parameters
	 * @return self
	 */
	public function __call($method, $parameters)
	{
		$this->options[$method] = $parameters[0];
		return $this;
	}

	/**
	 * Handle statically callings.
	 *
	 * @param  string  $method
	 * @param  array  $parameters
	 * @return self
	 */
	public static function __callStatic($method, $parameters)
	{
		if (self::$instance == null) {
			self::$instance = new self();
		}
		return self::$instance->$method(...$parameters);
	}
}

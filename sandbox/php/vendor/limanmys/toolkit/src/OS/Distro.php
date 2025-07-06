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
	public function runSudo($attributes = [])
	{
		 $logFile = '/tmp/runsudo_debug.txt';
   		 $timestamp = date('Y-m-d H:i:s');
	    file_put_contents($logFile, "\n=== runSudo START [$timestamp] ===\n", FILE_APPEND);
		file_put_contents($logFile, "Input attributes: " . var_export($attributes, true) . "\n", FILE_APPEND);
		file_put_contents($logFile, "Engine class: " . (isset(self::$engine) ? self::$engine : 'NOT SET') . "\n", FILE_APPEND);

		$result = $this->get();
		if (!$result) {
			return false;
		}
		 $output = Command::runSudo($result, $attributes);

		file_put_contents($logFile, "Final output: " . var_export($output, true) . "\n", FILE_APPEND);
		return $output;
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

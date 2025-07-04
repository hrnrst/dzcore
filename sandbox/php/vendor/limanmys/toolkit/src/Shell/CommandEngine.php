<?php
namespace Liman\Toolkit\Shell;

class CommandEngine implements ICommandEngine
{
    /**
     * Run command.
     *
     * @param  string  $command
     * @return string
     */
   public static function run($command)
  {
      // Komutu ve çalıştırılma zamanını logla
      file_put_contents('/tmp/command_run.log', "[" . date('Y-m-d H:i:s') . "] Command: $command\n", FILE_APPEND);

      // Komut çalıştırılıyor
      return runCommand($command);
      // Çıktıyı logla
      file_put_contents('/tmp/command_run.log', "[" . date('Y-m-d H:i:s') . "] Output: " . var_export($output, true) . "\n\n", FILE_APPEND);

  }


    /**
     * Manipulated sudo command to passing password to sudo binary.
     *
     * @return string
     */
   public static function sudo()
	{
		return sudo();
	}
	
}

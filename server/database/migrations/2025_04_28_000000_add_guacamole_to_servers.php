<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('servers', function (Blueprint $table) {
            $table->string('guacamole_connection_id')->nullable()->after('status');
        });
        
        // Guacamole sistem ayarları - UUID ile birlikte
        $settings = [
            [
                'id' => \Illuminate\Support\Str::uuid()->toString(),
                'key' => 'guacamole_url',
                'data' => 'http://localhost:8080/guacamole',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => \Illuminate\Support\Str::uuid()->toString(),
                'key' => 'guacamole_user',
                'data' => 'guacadmin',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => \Illuminate\Support\Str::uuid()->toString(),
                'key' => 'guacamole_pass',
                'data' => 'guacadmin',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];
        
        foreach ($settings as $setting) {
            DB::table('system_settings')->insert($setting);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('servers', function (Blueprint $table) {
            $table->dropColumn('guacamole_connection_id');
        });
        
        DB::table('system_settings')->whereIn('key', [
            'guacamole_url',
            'guacamole_user',
            'guacamole_pass'
        ])->delete();
    }
};

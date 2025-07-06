<?php

return [
    'api_url' => env('LICENSEBOX_API_URL', 'https://license.scncore.com/api/verify'),
    'api_key' => env('LICENSEBOX_API_KEY', 'E8A16D26A774AB8413A5'),
    'product_id' => env('LICENSEBOX_PRODUCT_ID', 'A35BB1F5'),
    'client_name' => env('LICENSEBOX_CLIENT', request()->getHost()),
];
<?php

namespace Bulldog\LaCrm;

use GuzzleHttp\Client as GuzzleClient;

class GuzzleAdapter implements ClientInterface
{
    private $client;
    private $userCode;
    private $apiToken;

    public function __construct($userCode, $apiToken)
    {
        $this->client = new GuzzleClient([
            'base_uri' => 'https://api.lessannoyingcrm.com',
        ]);

        $this->userCode = $userCode;
        $this->apiToken = $apiToken;
    }

    public function send($function, array $options)
    {
        $data['UserCode'] = $this->userCode;
        $data['APIToken'] = $this->apiToken;
        $data['Function'] = $function;
        $data['Parameters'] = json_encode($options);

        return $this->client->request('POST', '', [
            'form_params' => $data
        ]);
    }
}

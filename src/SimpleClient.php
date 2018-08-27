<?php

namespace Bulldog\LaCrm;

class SimpleClient
{
    public static function create($userCode, $apiToken)
    {
        return new Client(new GuzzleAdapter($userCode, $apiToken));
    }
}

<?php

namespace Bulldog\LaCrm\Endpoints;

abstract class Endpoint
{
    public function toArray()
    {
        return get_object_vars($this);
    }
}

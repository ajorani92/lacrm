<?php

namespace Bulldog\LaCrm;

interface ClientInterface
{
    public function send($function, array $options);
}

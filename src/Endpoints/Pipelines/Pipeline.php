<?php

namespace Bulldog\LaCrm\Endpoints\Pipelines;

use Bulldog\LaCrm\Endpoints\Endpoint;

abstract class Pipeline extends Endpoint
{
    /**
     * @var string
     */
    public $Note;

    /**
     * @var string
     */
    public $StatusId;

    /**
     * @var string
     */
    public $Priority;

    /**
     * @var array
     */
    public $CustomFields;
}

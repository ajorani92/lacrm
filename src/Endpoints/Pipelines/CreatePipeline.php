<?php

namespace Bulldog\LaCrm\Endpoints\Pipelines;

class CreatePipeline extends Pipeline
{
    /**
     * @var string
     */
    public $ContactId;

    /**
     * CreatePipeline constructor.
     * @param $ContactId
     */
    public function __construct($ContactId)
    {
        $this->ContactId = $ContactId;
    }
}

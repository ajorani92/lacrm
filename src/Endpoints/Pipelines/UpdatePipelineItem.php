<?php

namespace Bulldog\LaCrm\Endpoints\Pipelines;

class UpdatePipelineItem extends Pipeline
{
    /**
     * @var string
     */
    public $PipelineItemId;

    /**
     * UpdatePipelineItem constructor.
     * @param $PipelineItemId
     */
    public function __construct($PipelineItemId)
    {
        $this->PipelineItemId = $PipelineItemId;
    }
}
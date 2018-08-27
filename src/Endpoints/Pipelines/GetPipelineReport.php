<?php

namespace Bulldog\LaCrm\Endpoints\Pipelines;

use Bulldog\LaCrm\Endpoints\Endpoint;

class GetPipelineReport extends Endpoint
{
    /**
     * @var string
     */
    public $PipelineId;

    /**
     * @var string
     */
    public $SortBy;

    /**
     * @var string
     */
    public $Page;

    /**
     * Can be ASC to sort from low to high or DESC to sort from high to low.
     * Defaults to ASC.
     *
     * @var string
     */
    public $SortDirection;

    /**
     * @var string
     */
    public $UserFilter;

    /**
     * @var string
     */
    public $StatusFilter;

    /**
     * GetPipelineReport constructor.
     * @param $PipelineId
     * @param $SortBy
     */
    public function __construct($PipelineId, $SortBy)
    {
        $this->PipelineId = $PipelineId;
        $this->SortBy = $SortBy;
    }
}

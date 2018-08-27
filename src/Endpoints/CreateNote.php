<?php

namespace Bulldog\LaCrm\Endpoints;

class CreateNote extends Endpoint
{
    /**
     * @var string
     */
    public $ContactId;

    /**
     * @var string
     */
    public $Note;

    /**
     * CreateNote constructor.
     * @param $ContactId
     * @param $Note
     */
    public function __construct($ContactId, $Note)
    {
        $this->ContactId = $ContactId;
        $this->Note = $Note;
    }
}
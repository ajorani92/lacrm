<?php

namespace Bulldog\LaCrm\Endpoints;

class CreateTask extends Endpoint
{
    /**
     * @var string
     */
    public $DueDate;

    /**
     * @var string
     */
    public $Name;

    /**
     * @var string
     */
    public $Description;

    /**
     * @var string
     */
    public $ContactId;

    /**
     * @var string
     */
    public $AssignedTo;

    /**
     * CreateTask constructor.
     * @param $DueDate
     * @param $Name
     */
    public function __construct($DueDate, $Name)
    {
        $this->DueDate = $DueDate;
        $this->Name = $Name;
    }
}
<?php

namespace Bulldog\LaCrm\Endpoints;

class CreateEvent extends Endpoint
{
    /**
     * @var string
     */
    public $Date;

    /**
     * @var string
     */
    public $StartTime;

    /**
     * @var string
     */
    public $EndTime;

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
    public $Contacts;

    /**
     * @var array
     */
    public $Users;

    /**
     * CreateEvent constructor.
     * @param $Date
     * @param $StartTime
     * @param $EndTime
     * @param $Name
     */
    public function __construct($Date, $StartTime, $EndTime, $Name)
    {
        $this->Date = $Date;
        $this->StartTime = $StartTime;
        $this->EndTime = $EndTime;
        $this->Name = $Name;
    }
}
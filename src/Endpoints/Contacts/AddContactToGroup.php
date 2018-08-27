<?php

namespace Bulldog\LaCrm\Endpoints\Contacts;

use Bulldog\LaCrm\Endpoints\Endpoint;

class AddContactToGroup extends Endpoint
{
    /**
     * @var string
     */
    public $ContactId;

    /**
     * @var string
     */
    public $GroupName;

    /**
     * AddContactToGroup constructor.
     * @param $ContactId
     * @param $GroupName
     */
    public function __construct($ContactId, $GroupName)
    {
        $this->ContactId = $ContactId;
        $this->GroupName = $GroupName;
    }
}
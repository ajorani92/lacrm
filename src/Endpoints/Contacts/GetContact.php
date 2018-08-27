<?php

namespace Bulldog\LaCrm\Endpoints\Contacts;

use Bulldog\LaCrm\Endpoints\Endpoint;

class GetContact extends Endpoint
{
    /**
     * This is the ID of the contact.
     *
     * @var string
     */
    public $ContactId;

    /**
     * GetContact constructor.
     * @param $ContactId
     */
    public function __construct($ContactId)
    {
        $this->ContactId = $ContactId;
    }
}
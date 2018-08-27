<?php

namespace Bulldog\LaCrm\Endpoints\Contacts;

class EditContact extends Contact
{
    public $ContactId;

    public function __construct($ContactId)
    {
        $this->ContactId = $ContactId;
    }
}
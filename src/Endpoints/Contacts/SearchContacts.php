<?php

namespace Bulldog\LaCrm\Endpoints\Contacts;

use Bulldog\LaCrm\Endpoints\Endpoint;

class SearchContacts extends Endpoint
{
    public $SearchTerms;
    public $NumRows;
    public $Page;
    public $Sort;
    public $RecordType;

    public function __construct($SearchTerms)
    {
        $this->SearchTerms = $SearchTerms;
    }
}

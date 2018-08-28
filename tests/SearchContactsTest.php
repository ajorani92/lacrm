<?php

use PHPUnit\Framework\TestCase;
use Bulldog\LaCrm\Endpoints\Contacts\SearchContacts;

class SearchContactTest extends TestCase
{
    public function testHasProperties()
    {
        $searchContacts = new SearchContacts('SearchTerms');
        $this->assertArrayHasKey('SearchTerms', $searchContacts->toArray());
        
    }
}

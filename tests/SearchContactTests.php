<?php

use PHPUnit\Framework\TestCase;
use Bulldog\LaCrm\Endpoints\Contacts\SearchContacts;

class SearchContactsTest extends TestCase
{
    public function testHasProperties()
    {
        $editContact = new SearchContacts('ContactId');
        $this->assertArrayHasKey('ContactId', $SearchContacts->toArray());
        $this->assertArrayHasKey('FullName', $SearchContacts->toArray());
        $this->assertArrayHasKey('CompanyName', $SearchContacts->toArray());
        $this->assertArrayHasKey('CompanyId', $SearchContacts->toArray());

    }
}

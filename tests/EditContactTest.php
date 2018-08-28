<?php

use PHPUnit\Framework\TestCase;
use Bulldog\LaCrm\Endpoints\Contacts\EditContact;

class EditContactTest extends TestCase
{
    public function testHasProperties()
    {
        $editContact = new EditContact('ContactId');
        $this->assertArrayHasKey('ContactId', $editContact->toArray());
        $this->assertArrayHasKey('FullName', $editContact->toArray());
        $this->assertArrayHasKey('CompanyName', $editContact->toArray());
        $this->assertArrayHasKey('CompanyId', $editContact->toArray());

    }
}

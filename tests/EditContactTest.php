<?php

use PHPUnit\Framework\TestCase;
use Bulldog\LaCrm\Endpoints\Contacts\EditContact;

class EditContactTest extends TestCase
{
    public function testHasProperties()
    {
        $editContact = new EditContact('ContactId');
        $this->assertArrayHasKey('ContactId', $editContact->toArray());

    }
}

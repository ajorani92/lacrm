<?php

use PHPUnit\Framework\TestCase;
use Bulldog\LaCrm\Endpoints\Contacts\DeleteContact;

class DeleteContactTest extends TestCase
{
    public function testHasProperties()
    {
        $deleteContact = new DeleteContact('contactId');
        $this->assertArrayHasKey('ContactId', $deleteContact->toArray());
        
    }
}

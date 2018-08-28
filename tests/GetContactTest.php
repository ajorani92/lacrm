<?php

use PHPUnit\Framework\TestCase;
use Bulldog\LaCrm\Endpoints\Contacts\GetContact;

class GetContactTest extends TestCase
{
    public function testHasProperties()
    {
        $getContact = new GetContact('contactId');
        $this->assertArrayHasKey('ContactId', $getContact->toArray());
        
    }
}

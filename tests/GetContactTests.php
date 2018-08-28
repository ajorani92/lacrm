<?php

use PHPUnit\Framework\TestCase;
use Bulldog\LaCrm\Endpoints\Contacts\GetContact;

class GetContactTest extends TestCase
{
    public function testHasProperties()
    {
        $getContact = new GetContact('ContactId');
        $this->assertArrayHasKey('ContactId', $GetContact->toArray());
        $this->assertArrayHasKey('FullName', $GetContact->toArray());
        $this->assertArrayHasKey('CompanyName', $GetContact->toArray());
        $this->assertArrayHasKey('CompanyId', $GetContact->toArray());

    }
}

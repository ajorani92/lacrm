<?php

use Bulldog\LaCrm\Endpoints\Contacts\Contact;
use PHPUnit\Framework\TestCase;
use Bulldog\LaCrm\Endpoints\Contacts\CreateContact;

class CreateContactTest extends TestCase
{
    public function testCreatingContact()
    {
        $createContact = new CreateContact;
        $this->assertInstanceOf(CreateContact::class, $createContact);
        $this->assertInstanceOf(Contact::class, $createContact);
    }

    public function testHasProperties()
    {
        $createContact = new CreateContact;
        $this->assertArrayHasKey('FullName', $createContact->toArray());
        $this->assertArrayHasKey('CompanyName', $createContact->toArray());
    }
}

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
        $this->assertArrayHasKey('CompanyId', $createContact->toArray());
        $this->assertArrayHasKey('Title', $createContact->toArray());
        $this->assertArrayHasKey('Industry', $createContact->toArray());
        $this->assertArrayHasKey('BackgroundInfo', $createContact->toArray());
        $this->assertArrayHasKey('Email', $createContact->toArray());
        $this->assertArrayHasKey('Phone', $createContact->toArray());
        $this->assertArrayHasKey('Birthday', $createContact->toArray());
        $this->assertArrayHasKey('Website', $createContact->toArray());
        $this->assertArrayHasKey('CustomFields', $createContact->toArray());
        $this->assertArrayHasKey('AssignedTo', $createContact->toArray());
    }
}

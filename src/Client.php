<?php

namespace Bulldog\LaCrm;

use Bulldog\LaCrm\Endpoints\Contacts\AddContactToGroup;
use Bulldog\LaCrm\Endpoints\Contacts\DeleteContact;
use Bulldog\LaCrm\Endpoints\Contacts\GetContact;
use Bulldog\LaCrm\Endpoints\Contacts\EditContact;
use Bulldog\LaCrm\Endpoints\Contacts\CreateContact;
use Bulldog\LaCrm\Endpoints\Contacts\SearchContacts;
use Bulldog\LaCrm\Endpoints\CreateEvent;
use Bulldog\LaCrm\Endpoints\CreateNote;
use Bulldog\LaCrm\Endpoints\CreateTask;
use Bulldog\LaCrm\Endpoints\Pipelines\CreatePipeline;
use Bulldog\LaCrm\Endpoints\Pipelines\GetPipelineReport;
use Bulldog\LaCrm\Endpoints\Pipelines\UpdatePipelineItem;

/**
 * Class Client
 * @package Bulldog\LaCrm
 */
class Client
{
    /**
     * @var ClientInterface
     */
    private $client;

    /**
     * Client constructor.
     * @param ClientInterface $clientInterface
     */
    public function __construct(ClientInterface $clientInterface)
    {
        $this->client = $clientInterface;
    }

    /**
     * Create a new CreateContact.
     *
     * @param CreateContact $contact
     * @return mixed
     */
    public function createContact(CreateContact $contact)
    {
        return $this->client->send('CreateContact', $contact->toArray());
    }

    /**
     * Get a Contact by their Contact ID.
     *
     * @param GetContact $contact
     * @return mixed
     */
    public function getContact(GetContact $contact)
    {
        return $this->client->send('GetContact', $contact->toArray());
    }

    /**
     * Update information for a Contact.
     *
     * @param EditContact $contact
     * @return mixed
     */
    public function editContact(EditContact $contact)
    {
        return $this->client->send('EditContact', $contact->toArray());
    }

    /**
     * CreatePipeline function is used to attach a new pipeline to a contact or
     * company in your CRM.
     *
     * @param CreatePipeline $pipeline
     * @return mixed
     */
    public function createPipeline(CreatePipeline $pipeline)
    {
        return $this->client->send('CreatePipeline', $pipeline->toArray());
    }

    /**
     * UpdatePipelineItem function is used to edit an existing pipeline item in the CRM.
     *
     * @param UpdatePipelineItem $pipelineItem
     * @return mixed
     */
    public function updatePipelineItem(UpdatePipelineItem $pipelineItem)
    {
        return $this->client->send('UpdatePipelineItem', $pipelineItem->toArray());
    }

    /**
     * CreateNote function is used to add a note to a contact's history.
     *
     * @param CreateNote $note
     * @return mixed
     */
    public function createNote(CreateNote $note)
    {
        return $this->client->send('CreateNote', $note->toArray());
    }

    /**
     * CreateTask function is used to add a task in your CRM.
     *
     * @param CreateTask $task
     * @return mixed
     */
    public function createTask(CreateTask $task)
    {
        return $this->client->send('CreateTask', $task->toArray());
    }

    /**
     * CreateEvent function is used to add an event to your calendar.
     *
     * @param CreateEvent $event
     * @return mixed
     */
    public function createEvent(CreateEvent $event)
    {
        return $this->client->send('CreateEvent', $event->toArray());
    }

    /**
     * AddContactToGroup function is used to add a contact to one of the groups in your CRM.
     *
     * @param AddContactToGroup $contact
     * @return mixed
     */
    public function addContactToGroup(AddContactToGroup $contact)
    {
        return $this->client->send('AddContactToGroup', $contact->toArray());
    }

    /**
     * SearchContacts function is used to retrieve a list of contacts and
     * companies that match a search.
     *
     * @param SearchContacts $search
     * @return mixed
     */
    public function searchContacts(SearchContacts $search)
    {
        return $this->client->send('SearchContacts', $search->toArray());
    }

    /**
     * DeleteContact function is used to remove contacts from your CRM.
     *
     * @param DeleteContact $contact
     * @return mixed
     */
    public function deleteContact(DeleteContact $contact)
    {
        return $this->client->send('DeleteContact', $contact->toArray());
    }

    /**
     * GetPipelineReport function is used to retrieve the data from a pipeline report.
     *
     * @param GetPipelineReport $pipelineReport
     * @return mixed
     */
    public function getPipelineReport(GetPipelineReport $pipelineReport)
    {
        return $this->client->send('GetPipelineReport', $pipelineReport->toArray());
    }

    /**
     * GetUserInfo function is used to retrieve meta information about your CRM account.
     *
     * @return mixed
     */
    public function getUserInfo()
    {
        return $this->client->send('GetUserInfo', []);
    }

    /**
     * GetCustomFields function is used to retrieve a list of all the custom
     * contact/company fields you've created in your CRM
     *
     * @return mixed
     */
    public function getCustomFields()
    {
        return $this->client->send('GetCustomFields', []);
    }
}

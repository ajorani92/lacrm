<?php

namespace Bulldog\LaCrm\Endpoints\Contacts;

use Bulldog\LaCrm\Endpoints\Endpoint;

abstract class Contact extends Endpoint
{
    /**
     * This is the contact's full name.
     *
     * @var string
     */
    public $FullName;

    /**
     * The name of the company.
     *
     * @var string
     */
    public $CompanyName;

    /**
     * You can use this INSTEAD OF the CompanyName.
     *
     * @var string
     */
    public $CompanyId;

    /**
     * The contact's title (CEO, Sales Rep, etc.).
     *
     * @var string
     */
    public $Title;

    /**
     * The company's industry.
     *
     * Only use this if you are creating a solo company (no contact).
     *
     * @var string
     */
    public $Industry;

    /**
     * The number of employees at the company.
     *
     * Only use this if you are creating a solo company (no contact).
     *
     * @var string
     */
    public $NumEmployees;

    /**
     * A long text field where you can store any additional data.
     *
     * Line break characters (\n) work in this field.
     *
     * @var string
     */
    public $BackgroundInfo;

    /**
     * An array of email addresses.
     *
     * @var array
     */
    public $Email;

    /**
     * An array of phone numbers.
     *
     * @var array
     */
    public $Phone;

    /**
     * An array of addresses.
     *
     * @var array
     */
    public $Address;

    /**
     * An array of websites.
     *
     * @var array
     */
    public $Website;

    /**
     * The contact's birthday.
     *
     * You can use any format you want, but we read "xx/xx/xxxx" as "mm/dd/yyyy"
     * (the American format) so if you prefer the European format you should use
     * something different like "yyyy-mm-dd" or "October 31st, 1981"
     *
     * @var string
     */
    public $Birthday;

    /**
     * An array of any additional data you want to enter.
     *
     * @var array
     */
    public $CustomFields;

    /**
     * (Optional) the UserId of who the contact is assigned to.
     *
     * @var string
     */
    public $AssignedTo;
}

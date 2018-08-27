# LaCRM

[![Build Status](https://travis-ci.org/bulldogcreative/lacrm.svg?branch=master)](https://travis-ci.org/bulldogcreative/lacrm)
[![Coverage Status](https://coveralls.io/repos/github/bulldogcreative/lacrm/badge.svg?branch=master)](https://coveralls.io/github/bulldogcreative/lacrm?branch=master)

A simple PHP Client for Less Annoying CRM.

## Installation

```sh
composer require bulldog/lacrm
```

## Usage

You will need to install `guzzlehttp/guzzle` by running `composer require guzzlehttp/guzzle`
if you do not want to write your own adapter. If you do want to write your own
adapter, it will need to implement the `ClientInterface` in this package. If
you are not sure what to do, then install Guzzle by running
`composer require guzzlehttp/guzzle`.

### Simple Client

```php
<?php

include 'vendor/autoload.php';

// If you installed Guzzle, then this will create and return the Client object
$client = Bulldog\LaCrm\SimpleClient::create('UserCode', 'ApiToken');

$contact = new Bulldog\LaCrm\Endpoints\Contacts\CreateContact;
$contact->FullName = "Levi";
$client->createContact($contact);

```

### Regular Client

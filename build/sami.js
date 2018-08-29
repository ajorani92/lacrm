
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Bulldog" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Bulldog.html">Bulldog</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Bulldog_LaCrm" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Bulldog/LaCrm.html">LaCrm</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Bulldog_LaCrm_Endpoints" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Bulldog/LaCrm/Endpoints.html">Endpoints</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Bulldog_LaCrm_Endpoints_Contacts" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Bulldog/LaCrm/Endpoints/Contacts.html">Contacts</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Bulldog_LaCrm_Endpoints_Contacts_AddContactToGroup" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Bulldog/LaCrm/Endpoints/Contacts/AddContactToGroup.html">AddContactToGroup</a>                    </div>                </li>                            <li data-name="class:Bulldog_LaCrm_Endpoints_Contacts_Contact" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Bulldog/LaCrm/Endpoints/Contacts/Contact.html">Contact</a>                    </div>                </li>                            <li data-name="class:Bulldog_LaCrm_Endpoints_Contacts_CreateContact" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Bulldog/LaCrm/Endpoints/Contacts/CreateContact.html">CreateContact</a>                    </div>                </li>                            <li data-name="class:Bulldog_LaCrm_Endpoints_Contacts_DeleteContact" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Bulldog/LaCrm/Endpoints/Contacts/DeleteContact.html">DeleteContact</a>                    </div>                </li>                            <li data-name="class:Bulldog_LaCrm_Endpoints_Contacts_EditContact" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Bulldog/LaCrm/Endpoints/Contacts/EditContact.html">EditContact</a>                    </div>                </li>                            <li data-name="class:Bulldog_LaCrm_Endpoints_Contacts_GetContact" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Bulldog/LaCrm/Endpoints/Contacts/GetContact.html">GetContact</a>                    </div>                </li>                            <li data-name="class:Bulldog_LaCrm_Endpoints_Contacts_SearchContacts" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Bulldog/LaCrm/Endpoints/Contacts/SearchContacts.html">SearchContacts</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Bulldog_LaCrm_Endpoints_Pipelines" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Bulldog/LaCrm/Endpoints/Pipelines.html">Pipelines</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Bulldog_LaCrm_Endpoints_Pipelines_CreatePipeline" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Bulldog/LaCrm/Endpoints/Pipelines/CreatePipeline.html">CreatePipeline</a>                    </div>                </li>                            <li data-name="class:Bulldog_LaCrm_Endpoints_Pipelines_GetPipelineReport" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Bulldog/LaCrm/Endpoints/Pipelines/GetPipelineReport.html">GetPipelineReport</a>                    </div>                </li>                            <li data-name="class:Bulldog_LaCrm_Endpoints_Pipelines_Pipeline" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Bulldog/LaCrm/Endpoints/Pipelines/Pipeline.html">Pipeline</a>                    </div>                </li>                            <li data-name="class:Bulldog_LaCrm_Endpoints_Pipelines_UpdatePipelineItem" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Bulldog/LaCrm/Endpoints/Pipelines/UpdatePipelineItem.html">UpdatePipelineItem</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Bulldog_LaCrm_Endpoints_CreateEvent" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Bulldog/LaCrm/Endpoints/CreateEvent.html">CreateEvent</a>                    </div>                </li>                            <li data-name="class:Bulldog_LaCrm_Endpoints_CreateNote" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Bulldog/LaCrm/Endpoints/CreateNote.html">CreateNote</a>                    </div>                </li>                            <li data-name="class:Bulldog_LaCrm_Endpoints_CreateTask" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Bulldog/LaCrm/Endpoints/CreateTask.html">CreateTask</a>                    </div>                </li>                            <li data-name="class:Bulldog_LaCrm_Endpoints_Endpoint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Bulldog/LaCrm/Endpoints/Endpoint.html">Endpoint</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Bulldog_LaCrm_Client" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bulldog/LaCrm/Client.html">Client</a>                    </div>                </li>                            <li data-name="class:Bulldog_LaCrm_ClientInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bulldog/LaCrm/ClientInterface.html">ClientInterface</a>                    </div>                </li>                            <li data-name="class:Bulldog_LaCrm_GuzzleAdapter" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bulldog/LaCrm/GuzzleAdapter.html">GuzzleAdapter</a>                    </div>                </li>                            <li data-name="class:Bulldog_LaCrm_SimpleClient" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bulldog/LaCrm/SimpleClient.html">SimpleClient</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Bulldog.html", "name": "Bulldog", "doc": "Namespace Bulldog"},{"type": "Namespace", "link": "Bulldog/LaCrm.html", "name": "Bulldog\\LaCrm", "doc": "Namespace Bulldog\\LaCrm"},{"type": "Namespace", "link": "Bulldog/LaCrm/Endpoints.html", "name": "Bulldog\\LaCrm\\Endpoints", "doc": "Namespace Bulldog\\LaCrm\\Endpoints"},{"type": "Namespace", "link": "Bulldog/LaCrm/Endpoints/Contacts.html", "name": "Bulldog\\LaCrm\\Endpoints\\Contacts", "doc": "Namespace Bulldog\\LaCrm\\Endpoints\\Contacts"},{"type": "Namespace", "link": "Bulldog/LaCrm/Endpoints/Pipelines.html", "name": "Bulldog\\LaCrm\\Endpoints\\Pipelines", "doc": "Namespace Bulldog\\LaCrm\\Endpoints\\Pipelines"},
            {"type": "Interface", "fromName": "Bulldog\\LaCrm", "fromLink": "Bulldog/LaCrm.html", "link": "Bulldog/LaCrm/ClientInterface.html", "name": "Bulldog\\LaCrm\\ClientInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bulldog\\LaCrm\\ClientInterface", "fromLink": "Bulldog/LaCrm/ClientInterface.html", "link": "Bulldog/LaCrm/ClientInterface.html#method_send", "name": "Bulldog\\LaCrm\\ClientInterface::send", "doc": "&quot;&quot;"},
            
            
            {"type": "Class", "fromName": "Bulldog\\LaCrm", "fromLink": "Bulldog/LaCrm.html", "link": "Bulldog/LaCrm/Client.html", "name": "Bulldog\\LaCrm\\Client", "doc": "&quot;Class Client&quot;"},
                                                        {"type": "Method", "fromName": "Bulldog\\LaCrm\\Client", "fromLink": "Bulldog/LaCrm/Client.html", "link": "Bulldog/LaCrm/Client.html#method___construct", "name": "Bulldog\\LaCrm\\Client::__construct", "doc": "&quot;Client constructor.&quot;"},
                    {"type": "Method", "fromName": "Bulldog\\LaCrm\\Client", "fromLink": "Bulldog/LaCrm/Client.html", "link": "Bulldog/LaCrm/Client.html#method_createContact", "name": "Bulldog\\LaCrm\\Client::createContact", "doc": "&quot;Create a new CreateContact.&quot;"},
                    {"type": "Method", "fromName": "Bulldog\\LaCrm\\Client", "fromLink": "Bulldog/LaCrm/Client.html", "link": "Bulldog/LaCrm/Client.html#method_getContact", "name": "Bulldog\\LaCrm\\Client::getContact", "doc": "&quot;Get a Contact by their Contact ID.&quot;"},
                    {"type": "Method", "fromName": "Bulldog\\LaCrm\\Client", "fromLink": "Bulldog/LaCrm/Client.html", "link": "Bulldog/LaCrm/Client.html#method_editContact", "name": "Bulldog\\LaCrm\\Client::editContact", "doc": "&quot;Update information for a Contact.&quot;"},
                    {"type": "Method", "fromName": "Bulldog\\LaCrm\\Client", "fromLink": "Bulldog/LaCrm/Client.html", "link": "Bulldog/LaCrm/Client.html#method_createPipeline", "name": "Bulldog\\LaCrm\\Client::createPipeline", "doc": "&quot;CreatePipeline function is used to attach a new pipeline to a contact or\ncompany in your CRM.&quot;"},
                    {"type": "Method", "fromName": "Bulldog\\LaCrm\\Client", "fromLink": "Bulldog/LaCrm/Client.html", "link": "Bulldog/LaCrm/Client.html#method_updatePipelineItem", "name": "Bulldog\\LaCrm\\Client::updatePipelineItem", "doc": "&quot;UpdatePipelineItem function is used to edit an existing pipeline item in the CRM.&quot;"},
                    {"type": "Method", "fromName": "Bulldog\\LaCrm\\Client", "fromLink": "Bulldog/LaCrm/Client.html", "link": "Bulldog/LaCrm/Client.html#method_createNote", "name": "Bulldog\\LaCrm\\Client::createNote", "doc": "&quot;CreateNote function is used to add a note to a contact&#039;s history.&quot;"},
                    {"type": "Method", "fromName": "Bulldog\\LaCrm\\Client", "fromLink": "Bulldog/LaCrm/Client.html", "link": "Bulldog/LaCrm/Client.html#method_createTask", "name": "Bulldog\\LaCrm\\Client::createTask", "doc": "&quot;CreateTask function is used to add a task in your CRM.&quot;"},
                    {"type": "Method", "fromName": "Bulldog\\LaCrm\\Client", "fromLink": "Bulldog/LaCrm/Client.html", "link": "Bulldog/LaCrm/Client.html#method_createEvent", "name": "Bulldog\\LaCrm\\Client::createEvent", "doc": "&quot;CreateEvent function is used to add an event to your calendar.&quot;"},
                    {"type": "Method", "fromName": "Bulldog\\LaCrm\\Client", "fromLink": "Bulldog/LaCrm/Client.html", "link": "Bulldog/LaCrm/Client.html#method_addContactToGroup", "name": "Bulldog\\LaCrm\\Client::addContactToGroup", "doc": "&quot;AddContactToGroup function is used to add a contact to one of the groups in your CRM.&quot;"},
                    {"type": "Method", "fromName": "Bulldog\\LaCrm\\Client", "fromLink": "Bulldog/LaCrm/Client.html", "link": "Bulldog/LaCrm/Client.html#method_searchContacts", "name": "Bulldog\\LaCrm\\Client::searchContacts", "doc": "&quot;SearchContacts function is used to retrieve a list of contacts and\ncompanies that match a search.&quot;"},
                    {"type": "Method", "fromName": "Bulldog\\LaCrm\\Client", "fromLink": "Bulldog/LaCrm/Client.html", "link": "Bulldog/LaCrm/Client.html#method_deleteContact", "name": "Bulldog\\LaCrm\\Client::deleteContact", "doc": "&quot;DeleteContact function is used to remove contacts from your CRM.&quot;"},
                    {"type": "Method", "fromName": "Bulldog\\LaCrm\\Client", "fromLink": "Bulldog/LaCrm/Client.html", "link": "Bulldog/LaCrm/Client.html#method_getPipelineReport", "name": "Bulldog\\LaCrm\\Client::getPipelineReport", "doc": "&quot;GetPipelineReport function is used to retrieve the data from a pipeline report.&quot;"},
                    {"type": "Method", "fromName": "Bulldog\\LaCrm\\Client", "fromLink": "Bulldog/LaCrm/Client.html", "link": "Bulldog/LaCrm/Client.html#method_getUserInfo", "name": "Bulldog\\LaCrm\\Client::getUserInfo", "doc": "&quot;GetUserInfo function is used to retrieve meta information about your CRM account.&quot;"},
                    {"type": "Method", "fromName": "Bulldog\\LaCrm\\Client", "fromLink": "Bulldog/LaCrm/Client.html", "link": "Bulldog/LaCrm/Client.html#method_getCustomFields", "name": "Bulldog\\LaCrm\\Client::getCustomFields", "doc": "&quot;GetCustomFields function is used to retrieve a list of all the custom\ncontact\/company fields you&#039;ve created in your CRM&quot;"},
            
            {"type": "Class", "fromName": "Bulldog\\LaCrm", "fromLink": "Bulldog/LaCrm.html", "link": "Bulldog/LaCrm/ClientInterface.html", "name": "Bulldog\\LaCrm\\ClientInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bulldog\\LaCrm\\ClientInterface", "fromLink": "Bulldog/LaCrm/ClientInterface.html", "link": "Bulldog/LaCrm/ClientInterface.html#method_send", "name": "Bulldog\\LaCrm\\ClientInterface::send", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bulldog\\LaCrm\\Endpoints\\Contacts", "fromLink": "Bulldog/LaCrm/Endpoints/Contacts.html", "link": "Bulldog/LaCrm/Endpoints/Contacts/AddContactToGroup.html", "name": "Bulldog\\LaCrm\\Endpoints\\Contacts\\AddContactToGroup", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bulldog\\LaCrm\\Endpoints\\Contacts\\AddContactToGroup", "fromLink": "Bulldog/LaCrm/Endpoints/Contacts/AddContactToGroup.html", "link": "Bulldog/LaCrm/Endpoints/Contacts/AddContactToGroup.html#method___construct", "name": "Bulldog\\LaCrm\\Endpoints\\Contacts\\AddContactToGroup::__construct", "doc": "&quot;AddContactToGroup constructor.&quot;"},
            
            {"type": "Class", "fromName": "Bulldog\\LaCrm\\Endpoints\\Contacts", "fromLink": "Bulldog/LaCrm/Endpoints/Contacts.html", "link": "Bulldog/LaCrm/Endpoints/Contacts/Contact.html", "name": "Bulldog\\LaCrm\\Endpoints\\Contacts\\Contact", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Bulldog\\LaCrm\\Endpoints\\Contacts", "fromLink": "Bulldog/LaCrm/Endpoints/Contacts.html", "link": "Bulldog/LaCrm/Endpoints/Contacts/CreateContact.html", "name": "Bulldog\\LaCrm\\Endpoints\\Contacts\\CreateContact", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Bulldog\\LaCrm\\Endpoints\\Contacts", "fromLink": "Bulldog/LaCrm/Endpoints/Contacts.html", "link": "Bulldog/LaCrm/Endpoints/Contacts/DeleteContact.html", "name": "Bulldog\\LaCrm\\Endpoints\\Contacts\\DeleteContact", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Bulldog\\LaCrm\\Endpoints\\Contacts", "fromLink": "Bulldog/LaCrm/Endpoints/Contacts.html", "link": "Bulldog/LaCrm/Endpoints/Contacts/EditContact.html", "name": "Bulldog\\LaCrm\\Endpoints\\Contacts\\EditContact", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bulldog\\LaCrm\\Endpoints\\Contacts\\EditContact", "fromLink": "Bulldog/LaCrm/Endpoints/Contacts/EditContact.html", "link": "Bulldog/LaCrm/Endpoints/Contacts/EditContact.html#method___construct", "name": "Bulldog\\LaCrm\\Endpoints\\Contacts\\EditContact::__construct", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bulldog\\LaCrm\\Endpoints\\Contacts", "fromLink": "Bulldog/LaCrm/Endpoints/Contacts.html", "link": "Bulldog/LaCrm/Endpoints/Contacts/GetContact.html", "name": "Bulldog\\LaCrm\\Endpoints\\Contacts\\GetContact", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bulldog\\LaCrm\\Endpoints\\Contacts\\GetContact", "fromLink": "Bulldog/LaCrm/Endpoints/Contacts/GetContact.html", "link": "Bulldog/LaCrm/Endpoints/Contacts/GetContact.html#method___construct", "name": "Bulldog\\LaCrm\\Endpoints\\Contacts\\GetContact::__construct", "doc": "&quot;GetContact constructor.&quot;"},
            
            {"type": "Class", "fromName": "Bulldog\\LaCrm\\Endpoints\\Contacts", "fromLink": "Bulldog/LaCrm/Endpoints/Contacts.html", "link": "Bulldog/LaCrm/Endpoints/Contacts/SearchContacts.html", "name": "Bulldog\\LaCrm\\Endpoints\\Contacts\\SearchContacts", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bulldog\\LaCrm\\Endpoints\\Contacts\\SearchContacts", "fromLink": "Bulldog/LaCrm/Endpoints/Contacts/SearchContacts.html", "link": "Bulldog/LaCrm/Endpoints/Contacts/SearchContacts.html#method___construct", "name": "Bulldog\\LaCrm\\Endpoints\\Contacts\\SearchContacts::__construct", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bulldog\\LaCrm\\Endpoints", "fromLink": "Bulldog/LaCrm/Endpoints.html", "link": "Bulldog/LaCrm/Endpoints/CreateEvent.html", "name": "Bulldog\\LaCrm\\Endpoints\\CreateEvent", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bulldog\\LaCrm\\Endpoints\\CreateEvent", "fromLink": "Bulldog/LaCrm/Endpoints/CreateEvent.html", "link": "Bulldog/LaCrm/Endpoints/CreateEvent.html#method___construct", "name": "Bulldog\\LaCrm\\Endpoints\\CreateEvent::__construct", "doc": "&quot;CreateEvent constructor.&quot;"},
            
            {"type": "Class", "fromName": "Bulldog\\LaCrm\\Endpoints", "fromLink": "Bulldog/LaCrm/Endpoints.html", "link": "Bulldog/LaCrm/Endpoints/CreateNote.html", "name": "Bulldog\\LaCrm\\Endpoints\\CreateNote", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bulldog\\LaCrm\\Endpoints\\CreateNote", "fromLink": "Bulldog/LaCrm/Endpoints/CreateNote.html", "link": "Bulldog/LaCrm/Endpoints/CreateNote.html#method___construct", "name": "Bulldog\\LaCrm\\Endpoints\\CreateNote::__construct", "doc": "&quot;CreateNote constructor.&quot;"},
            
            {"type": "Class", "fromName": "Bulldog\\LaCrm\\Endpoints", "fromLink": "Bulldog/LaCrm/Endpoints.html", "link": "Bulldog/LaCrm/Endpoints/CreateTask.html", "name": "Bulldog\\LaCrm\\Endpoints\\CreateTask", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bulldog\\LaCrm\\Endpoints\\CreateTask", "fromLink": "Bulldog/LaCrm/Endpoints/CreateTask.html", "link": "Bulldog/LaCrm/Endpoints/CreateTask.html#method___construct", "name": "Bulldog\\LaCrm\\Endpoints\\CreateTask::__construct", "doc": "&quot;CreateTask constructor.&quot;"},
            
            {"type": "Class", "fromName": "Bulldog\\LaCrm\\Endpoints", "fromLink": "Bulldog/LaCrm/Endpoints.html", "link": "Bulldog/LaCrm/Endpoints/Endpoint.html", "name": "Bulldog\\LaCrm\\Endpoints\\Endpoint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bulldog\\LaCrm\\Endpoints\\Endpoint", "fromLink": "Bulldog/LaCrm/Endpoints/Endpoint.html", "link": "Bulldog/LaCrm/Endpoints/Endpoint.html#method_toArray", "name": "Bulldog\\LaCrm\\Endpoints\\Endpoint::toArray", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bulldog\\LaCrm\\Endpoints\\Pipelines", "fromLink": "Bulldog/LaCrm/Endpoints/Pipelines.html", "link": "Bulldog/LaCrm/Endpoints/Pipelines/CreatePipeline.html", "name": "Bulldog\\LaCrm\\Endpoints\\Pipelines\\CreatePipeline", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bulldog\\LaCrm\\Endpoints\\Pipelines\\CreatePipeline", "fromLink": "Bulldog/LaCrm/Endpoints/Pipelines/CreatePipeline.html", "link": "Bulldog/LaCrm/Endpoints/Pipelines/CreatePipeline.html#method___construct", "name": "Bulldog\\LaCrm\\Endpoints\\Pipelines\\CreatePipeline::__construct", "doc": "&quot;CreatePipeline constructor.&quot;"},
            
            {"type": "Class", "fromName": "Bulldog\\LaCrm\\Endpoints\\Pipelines", "fromLink": "Bulldog/LaCrm/Endpoints/Pipelines.html", "link": "Bulldog/LaCrm/Endpoints/Pipelines/GetPipelineReport.html", "name": "Bulldog\\LaCrm\\Endpoints\\Pipelines\\GetPipelineReport", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bulldog\\LaCrm\\Endpoints\\Pipelines\\GetPipelineReport", "fromLink": "Bulldog/LaCrm/Endpoints/Pipelines/GetPipelineReport.html", "link": "Bulldog/LaCrm/Endpoints/Pipelines/GetPipelineReport.html#method___construct", "name": "Bulldog\\LaCrm\\Endpoints\\Pipelines\\GetPipelineReport::__construct", "doc": "&quot;GetPipelineReport constructor.&quot;"},
            
            {"type": "Class", "fromName": "Bulldog\\LaCrm\\Endpoints\\Pipelines", "fromLink": "Bulldog/LaCrm/Endpoints/Pipelines.html", "link": "Bulldog/LaCrm/Endpoints/Pipelines/Pipeline.html", "name": "Bulldog\\LaCrm\\Endpoints\\Pipelines\\Pipeline", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Bulldog\\LaCrm\\Endpoints\\Pipelines", "fromLink": "Bulldog/LaCrm/Endpoints/Pipelines.html", "link": "Bulldog/LaCrm/Endpoints/Pipelines/UpdatePipelineItem.html", "name": "Bulldog\\LaCrm\\Endpoints\\Pipelines\\UpdatePipelineItem", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bulldog\\LaCrm\\Endpoints\\Pipelines\\UpdatePipelineItem", "fromLink": "Bulldog/LaCrm/Endpoints/Pipelines/UpdatePipelineItem.html", "link": "Bulldog/LaCrm/Endpoints/Pipelines/UpdatePipelineItem.html#method___construct", "name": "Bulldog\\LaCrm\\Endpoints\\Pipelines\\UpdatePipelineItem::__construct", "doc": "&quot;UpdatePipelineItem constructor.&quot;"},
            
            {"type": "Class", "fromName": "Bulldog\\LaCrm", "fromLink": "Bulldog/LaCrm.html", "link": "Bulldog/LaCrm/GuzzleAdapter.html", "name": "Bulldog\\LaCrm\\GuzzleAdapter", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bulldog\\LaCrm\\GuzzleAdapter", "fromLink": "Bulldog/LaCrm/GuzzleAdapter.html", "link": "Bulldog/LaCrm/GuzzleAdapter.html#method___construct", "name": "Bulldog\\LaCrm\\GuzzleAdapter::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bulldog\\LaCrm\\GuzzleAdapter", "fromLink": "Bulldog/LaCrm/GuzzleAdapter.html", "link": "Bulldog/LaCrm/GuzzleAdapter.html#method_send", "name": "Bulldog\\LaCrm\\GuzzleAdapter::send", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bulldog\\LaCrm", "fromLink": "Bulldog/LaCrm.html", "link": "Bulldog/LaCrm/SimpleClient.html", "name": "Bulldog\\LaCrm\\SimpleClient", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bulldog\\LaCrm\\SimpleClient", "fromLink": "Bulldog/LaCrm/SimpleClient.html", "link": "Bulldog/LaCrm/SimpleClient.html#method_create", "name": "Bulldog\\LaCrm\\SimpleClient::create", "doc": "&quot;&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});



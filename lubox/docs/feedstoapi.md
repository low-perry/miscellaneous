# Migrating from feeds to API

If your current setup involves processing data from feeds and you wish to migrate to pushing data via API, there are several considerations to ensure a smooth and safe migration.

The main risk in migrating from feeds to API is potential changes to the data structure, which could disrupt your frontend or backend code if it relies on attributes that may no longer be present. To ensure a secure migration, follow these steps:

1.	**Work in a separate environment.** Avoid using your production site for testing. Instead, create a new site within the application and generate API keys. If you need assistance with this, contact Luigi’s Box support.
2.	**Analyze the existing data structure.** You can either review the data in the Catalog Browser section of the Luigi’s Box app or make a search request to view the API output.
When extracting data from feeds, we manage how and if we transform it. For XML feeds, the XML element names are downcased and used as attribute names. Occasionally, element names may be renamed to align with Luigi’s Box best practices.
3.	**Ignore automatically derived attributes.** There is no need to explicitly index these attributes, as they will be derived from the raw data you are indexing. For more details, refer to the [Derived Attributes](/indexing/data_layout.html#derived-fields) documentation.
4.	**Index data to the new index**. Use the tracker_id of the site created in step 1, and update your frontend or backend code to request data from this new index by changing the `tracker_id`.
Test thoroughly to confirm that the frontend functions as expected. If data structures do not align with your code’s expectations, adjust the data structures, reindex the data, and retest.
Note: If your integration was provided by Luigi’s Box, reach out to support to obtain a “preview link” set to request data from the new index, enabling you to test.
5.	**Switch to API indexing.** Once you’ve verified the new indexing setup and are confident that your integration will function as intended after the switch, disable data processing via feeds and start indexing through the API.


<div class="mt-5"></div>

## Related

<div class="row mt-4">
  <div class="col-md-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title"><i class="bi bi-compass"></i> Migrating LBX to API</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
        <p class="card-text">Migrating the service integration to API</p>
        <a href="/guidelines/lbx-to-be.html" class="card-link">Read the docs →</a>
      </div>
    </div>
  </div>
</div>

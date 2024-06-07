import json
import functions_framework
from google.cloud import storage


@functions_framework.http
def list_blobs(request):
    """Lists all the blobs in the bucket."""
    bucket_name = "photos-012"

    storage_client = storage.Client()

    blobs = storage_client.list_blobs(bucket_name)

    blob_list = [blob.name for blob in blobs]
    response = json.dumps(blob_list)
    status = 200
    headers = {"Access-Control-Allow-Origin": "*"}
    return response, status, headers

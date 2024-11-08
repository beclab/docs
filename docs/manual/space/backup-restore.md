# Back up and restore

Olares Space is the official solution to back up snapshots for your Olares instances. You can restore an Olares to its most recent state whenever needed. This section provides instructions for managing backups and restores in Olares Space. 

:::tip
Each Olares is provided with 10 GB of free backup space. Any usage beyond this will be charged according to the cloud provider's pricing.
:::

## View backup list

The backup task list shows information for each backup task, including:

- Initial creation time
- Most recent snapshot time
- Overall storage usage 

![alt text](/images/how-to/space/backup_list.jpg)

Click **View Details** on a task to see its detail page. The detail page shows the storage usage since the task was created and a list of all successful snapshots.

:::info NOTE
Currently, only restoring from the most recent snapshot is supported.
:::

## Restore backup to the Olares Space

![alt text](/images/how-to/space/restore_backup_to_the_olares_space.jpg)

Restoring a snapshot to the cloud is similar to setting up a new cloud-based Olares.

1. Set up relevant details.

   a. Select the cloud service provider and their data center location. 

   b. Choose the hardware configuration for the instance. 

   c. Confirm the snapshot details and enter the backup password.

2. Understand charges for storage and bandwidth. <br>Each instance includes a certain amount of free storage and traffic. Any usage exceeding these quotas will incur charges.

3. Confirm the order and complete the payment. After that, the Olares begins to install.

:::info NOTE
During the installation process, Olares will verify the backup password. If it is incorrect, you'll be asked to re-enter the correct one. If you forget the backup password, the restoration process won't be able to continue. In this case, please return your instance and try restoring again.
:::

:::info NOTE
To avoid conflicts or other unforeseeable problem, you must return the existing Olares that uses the same name before restoring to a cloud-based Olares.
:::

## Restore backup to local

![alt text](/images/how-to/space/restore_backup_to_local.jpg)

To restore a backup to a local Olares:

1. Click **Restore to Local**. The **Restoration Guide** page opens.
2. Follow the instructions in the pop-up for restoration. For more details, see [Restore Olares from a snapshot](../../developer/develop/advanced/cli#restore-olares-from-a-snapshot).

:::info NOTE
You need to enter the backup password in the command line window to continue with the restoration. If you enter the wrong backup password, follow the instructions to retry.
:::
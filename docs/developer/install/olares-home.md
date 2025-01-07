# Olares Home

**Olares Home** is the default installation directory for Olares. It stores images, logs, dependency components, and version management data. In this document, you will learn the structure of Olares Home and gain a clearer understanding of the Olares installation process.


## Path configuration

By default, **Olares Home** is located at `~/.olares`. You can customize its location in the following ways:

- Set the environment variable `olares-home`.
- Use the `olares-cli` command-line option `base_dir` to change the path.


## Directory structure

A typical Olares Home directory might look like this:

```
./olares
├── images                # Stores downloaded image files
│   ├── {image-file}.tar.gz
│   └── {image-file}.tar.gz
├── logs                  # Stores all logs
├── pkg                   # Stores downloaded system dependency components
│   ├── cni               # Container Network Interface (K8s network plugins)
│   ├── components        # Olares foundation software dependencies (not directly related to K8s)
│   │                       such as olaresd, JuiceFS, Redis, etc.
│   ├── containerd        # Container Runtime Interface (CRI) runtime
│   ├── crictl            # CRI command-line tool
│   ├── etcd              # Persistent database for K8s
│   ├── helm              # Command-line tool for K8s application management
│   ├── kube              # Core K8s programs (e.g., kubeadm, kubelet, k3s)
│   └── runc              # Open Container Initiative (OCI) runtime
└── versions              # Stores different Olares versions
    ├── v1.10.0-20241001
    │   ├── cli
    │   ├── deploy
    │   ├── files
    │   ├── images
    │   ├── logs          # Stores logs specific to this version of Olares
    │   │   ├── install.log
    │   │   └── uninstall.log
    │   └── wizard        # Contains Helm charts for system and user applications
    └── v1.10.0-20240930
        ├── cli
        ├── deploy
        ├── files
        ├── images
        ├── logs
        │   ├── install.log
        │   └── uninstall.log
        └── wizard

```

## Key features 

The structure of Olares Home enables efficient file management and flexible version switching, allowing for simplified installation and daily operations.  

- **Versioned storage**: Each Olares version is stored under the `versions` directory. All files and logs related to a particular version are contained within its subdirectory.

- **Single Olares instance per machine**  
   Only one Olares instance can run on a single machine at a time, preventing version conflicts.

- **Shared images and dependencies**  
   Different Olares versions share the files in the `images` and `pkg` directories, reducing duplicate downloads and saving storage space.
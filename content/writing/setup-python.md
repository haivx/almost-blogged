---
title: Setting Up a Python Environment on macOS
description: A Brief Guide for Getting Started Writing Python on a Mac (with Virtual Environments).
date: 2025-02-06T16:00:00.006Z
modified: 2025-02-28T11:31:14-06:00
published: true
tags:
  - python
  - virtual-env
---

If you're new to writing Python on macOS, this short guide will walk you through everything you need to set up your environment using virtual environments — clean, isolated Python project setups that keep your dependencies organized.

## Prerequisites

Before we start, make sure you have:

- A Mac (macOS 10.15 or later recommended)
- Homebrew installed (optional but recommended)
- Basic command line knowledge (Terminal app)

##  Step 1: Install Python (If Needed)

macOS comes with Python 2.x pre-installed, but you should use Python 3 for all modern development.

<b>Option 1: Use Homebrew (recommended)</b>

```sh
brew install python
```

This installs python3 and pip3.

```sh
python3 --version
pip3 --version
```
<b>Option 2: Download from python.org</b>

Go to https://www.python.org/downloads/mac-osx/ and install the latest version manually.


## Step 2: Create a Project Directory

```sh
mkdir my-python-project
cd my-python-project

```

## Step 3: Create a Virtual Environment

Virtual environments allow you to create isolated Python environments for different projects. This maybe isn't the _most_ important thing in the world right now, but if you ever end up with two or more different projects that use different versions of a given library, you'll thank me later.

```sh
 python3 -m venv venv
```

> [!Question] What is a virtual environment?
> `virtualenv` is a tool used to create isolated Python environments, allowing different projects to have their own dependencies, regardless of conflicts with other projects. It prevents dependency conflicts by maintaining separate directories containing Python binaries and libraries for each project. This isolation ensures that changes in one environment do not affect others. Using `virtualenv` promotes cleaner project setups and easier dependency management.

## Step 4: Activate the Virtual Environment

```sh
source venv/bin/activate
```
You’ll notice your terminal prompt changes to something like:
```sh
(venv) my-mac:my-python-project yourname$

```
Now you're working inside the virtual environment.

## Step 5: Install Packages

While the environment is active, install packages with pip:
```sh
pip install requests
```

Check what’s installed:

```sh
pip list
```

## Step 6: Start Writing Python

Create a file:

```sh
touch main.py
open -a "Visual Studio Code" main.py  # Or use any editor

```

// Copyright (c) Privacy Browser Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at http://mozilla.org/MPL/2.0/.

const fs = require('fs')
const Log = require('../lib/logging')
const path = require('path')
const { spawnSync } = require('child_process')
const util = require('../lib/util')

Log.progress('Initializing privacy browser project')

const privacyCoreDir = path.resolve(__dirname, '..', 'src', 'core')
const privacyCoreRef = util.getProjectVersion('privacy-core')

if (!fs.existsSync(path.join(privacyCoreDir, '.git'))) {
  Log.status(`Creating privacy-core directory [${privacyCoreRef}] into ${privacyCoreDir}...`)
  fs.mkdirSync(privacyCoreDir)
  Log.progress(`Privacy core directory created at ${privacyCoreDir}`)
}

let npmCommand = 'npm'
if (process.platform === 'win32') {
  npmCommand += '.cmd'
}

Log.progress('Initialization complete')

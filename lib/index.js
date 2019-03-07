/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
const Input = require('postcss/lib/input');

const Parser = require('./ValuesParser');
const Stringifier = require('./ValuesStringifier');

module.exports = {
  parse(css, options) {
    const input = new Input(css, options);
    const parser = new Parser(input, options);

    parser.parse();

    return parser.root;
  },

  stringify(node, builder) {
    const stringifier = new Stringifier(builder);
    stringifier.stringify(node);
  },

  nodeToString(node) {
    let result = '';

    module.exports.stringify(node, (bit) => {
      result += bit;
    });

    return result;
  }
};

/*
  Copyright © 2020 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
module.exports = {
  throws: {
    decl: 'a {\n  b: +-2.;\n}',
    atRule: '@foo +-2. {\n  a {\n    b: c;\n  }\n}',
    interpolation: 'a {\n  background-#{+-2.}: white;\n}'
  },
  functionCall: 'p {\n  color: rgb(var(--some-color) / 70%);\n}'
};

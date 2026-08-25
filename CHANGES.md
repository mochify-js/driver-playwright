# Changes

## 2.0.0

- [`7437d43`](https://github.com/mochify-js/driver-playwright/commit/7437d43c60c76254c8b8728ce5ff354a6132ee5b)
  chore: update dependencies (Yashar Fakhari)
    >
    > @mochify/mochify (peer): 1.0.1 -> 2.0.0
    >
    > @sinonjs/referee-sinon (dev): 12.0.0 -> 12.0.1
    > c8 (dev): 11.0.0 -> 12.0.0
    > lint-staged (dev): 16.3.0 -> 17.3.0
    > mocha (dev): 11.7.5 -> 12.0.0-rc.6
    > prettier (dev): 3.8.1 -> 3.9.6
    >
- [`62c9901`](https://github.com/mochify-js/driver-playwright/commit/62c9901ed2a5c0c8f4608a8efe9225c7880956c1)
  chore(deps-dev): upgrade typescript to 7.0.2, drop @studio/tsconfig (Yashar Fakhari)
    >
    > @studio/tsconfig capped typescript at ^5, blocking the upgrade. Its
    > settings are now inlined in tsconfig.json (Node 22+, nodenext), with
    > tsconfig.pack.json and test/tsconfig.types-check.json extending it
    > locally.
    >
- [`04a9aba`](https://github.com/mochify-js/driver-playwright/commit/04a9aba96c838a769f41a74f78cb6925c6e2cbd3)
  chore(dev): upgrade dependencies (Yashar Fakhari)
    >
    > eslint (dev): 9.39.2 -> 10.9.1
    > @studio/eslint-config (dev): 8.0.1 -> 9.0.1
    >
- [`9186a98`](https://github.com/mochify-js/driver-playwright/commit/9186a98327e92f98feeb837c388672f648997124)
  chore: upgrade playwright to 1.62.1 (Yashar Fakhari)
- [`eb455e7`](https://github.com/mochify-js/driver-playwright/commit/eb455e743bc4e3a7dd3c87dc25ce8ef55c3be71d)
  ci: use NodeJs 22+; fix dependabot run issues (Yashar Fakhari)
- [`22d345d`](https://github.com/mochify-js/driver-playwright/commit/22d345d0ba5f921295df18d7f06e2f4f9efca36f)
  chore(deps-dev): bump @types/node from 25.1.0 to 25.3.3 (#40) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`39896d7`](https://github.com/mochify-js/driver-playwright/commit/39896d764c3632bc1e38a5c9876c496e8b5d2f81)
  chore(deps): bump playwright from 1.58.1 to 1.58.2 (#39) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`84b174b`](https://github.com/mochify-js/driver-playwright/commit/84b174b627df6e2b3ab6cd1bef11239dcc02dba9)
  chore(deps-dev): bump rimraf from 6.1.2 to 6.1.3 (#38) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`3f05b69`](https://github.com/mochify-js/driver-playwright/commit/3f05b6937009e41c6f347b256f8828a3d09370e5)
  chore(deps-dev): bump c8 from 10.1.3 to 11.0.0 (#37) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`34574fb`](https://github.com/mochify-js/driver-playwright/commit/34574fb9d83939667074cef48ce7a98a042f0e78)
  chore(deps-dev): bump lint-staged from 16.2.7 to 16.3.0 (#35) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`abf5302`](https://github.com/mochify-js/driver-playwright/commit/abf5302f9169ac20b725a84a3b9be915dc2e997b)
  chore(deps-dev): bump @types/node from 25.0.3 to 25.1.0 (#34) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`3bcb83f`](https://github.com/mochify-js/driver-playwright/commit/3bcb83f644881c7cb5f0c04bedc3a3264b667a03)
  chore(deps-dev): bump prettier from 3.7.4 to 3.8.1 (#33) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`0e1e05b`](https://github.com/mochify-js/driver-playwright/commit/0e1e05b1113da90bc90657d481b9b8f2f3aacbad)
  chore(deps): bump playwright from 1.57.0 to 1.58.1 (#32) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`c36fa4f`](https://github.com/mochify-js/driver-playwright/commit/c36fa4fad81db39669c64d35b349f229896ae630)
  chore(deps): bump actions/setup-node from 5 to 6 (#31) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`9fc8965`](https://github.com/mochify-js/driver-playwright/commit/9fc8965ec314c2318f987c04954b42921d961761)
  chore(deps): bump actions/checkout from 5 to 6 (#30) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`ddb7073`](https://github.com/mochify-js/driver-playwright/commit/ddb70739f2f56e347b9a7749710dde78768e00f6)
  chore(deps-dev): bump @types/node from 24.10.1 to 25.0.3 (#29) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`64cb3d7`](https://github.com/mochify-js/driver-playwright/commit/64cb3d729a1ac538fae0de57cc9504bdc43b1a02)
  chore(deps-dev): bump eslint from 9.39.1 to 9.39.2 (#28) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`2afcac8`](https://github.com/mochify-js/driver-playwright/commit/2afcac85a1f9f0d77a582c2bd349f9ef89091d38)
  chore(deps-dev): bump prettier from 3.7.3 to 3.7.4 (#27) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`c103c63`](https://github.com/mochify-js/driver-playwright/commit/c103c6398a0eac126309ca32813d486ab3dc286d)
  chore(deps-dev): bump prettier from 3.6.2 to 3.7.3 (#23) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`1e372e2`](https://github.com/mochify-js/driver-playwright/commit/1e372e291fe590190ab60d25dde155103ba10439)
  chore(deps-dev): bump mocha from 11.7.4 to 11.7.5 (#25) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`d8bb3b1`](https://github.com/mochify-js/driver-playwright/commit/d8bb3b1c70a62be1ff1e0abdbc7545d79bf7fe4e)
  chore(deps-dev): bump lint-staged from 16.2.6 to 16.2.7 (#22) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`638c649`](https://github.com/mochify-js/driver-playwright/commit/638c64986a8eda05e9db35cda12903aae18bec65)
  chore(deps-dev): bump eslint from 9.39.0 to 9.39.1 (#26) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`b141f6a`](https://github.com/mochify-js/driver-playwright/commit/b141f6a02261461ff21770ddfccbbe1d3520de97)
  chore(deps-dev): bump rimraf from 6.1.0 to 6.1.2 (#24) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`53a2f5f`](https://github.com/mochify-js/driver-playwright/commit/53a2f5fe0acfabb0e1a2f27644a39db7e533501b)
  chore(deps): bump playwright from 1.56.1 to 1.57.0 (#20) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`083c92f`](https://github.com/mochify-js/driver-playwright/commit/083c92f54cf2435664339c7ab87141ed8ef65190)
  chore(deps-dev): bump @types/node from 24.9.2 to 24.10.1 (#21) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`1e9d85c`](https://github.com/mochify-js/driver-playwright/commit/1e9d85c019428d9823ffe7f41025d0cc87650c21)
  chore(deps-dev): bump lint-staged from 16.2.3 to 16.2.6 (#17) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`d1941f9`](https://github.com/mochify-js/driver-playwright/commit/d1941f978ae59bbe7283683a4ad6f663a7949ffa)
  chore(deps-dev): bump rimraf from 6.0.1 to 6.1.0 (#16) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`723d6cd`](https://github.com/mochify-js/driver-playwright/commit/723d6cd6b35fc931691d91c6e5a0c3975f5d9b20)
  chore(deps-dev): bump @types/node from 24.6.1 to 24.9.2 (#19) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`a49009e`](https://github.com/mochify-js/driver-playwright/commit/a49009e2d844044ef5fb48ac1c69ed4a619b53e1)
  chore(deps-dev): bump eslint from 9.36.0 to 9.39.0 (#18) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`2f46c58`](https://github.com/mochify-js/driver-playwright/commit/2f46c58423cc900ab868a5064341d6c49f7b96f0)
  chore(deps): bump playwright from 1.55.1 to 1.56.1 (#14) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`31d4949`](https://github.com/mochify-js/driver-playwright/commit/31d49497ef76ef23bc96c87d2a2d1c6eeeb20507)
  chore(deps-dev): bump mocha from 11.7.3 to 11.7.4 (#15) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`1222a46`](https://github.com/mochify-js/driver-playwright/commit/1222a462fd4b87a530f7aaad03321023d7bba6b5)
  chore(deps): bump actions/setup-node from 4 to 5 (#13) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`8e0931d`](https://github.com/mochify-js/driver-playwright/commit/8e0931dc768e27b52f80f145444c1eaa4037426d)
  chore(deps-dev): bump typescript from 5.9.2 to 5.9.3 (#12) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`c278da7`](https://github.com/mochify-js/driver-playwright/commit/c278da770fedf118e3cea3bd1ba055e16bb35fef)
  chore(deps-dev): bump @types/node from 24.3.0 to 24.6.1 (#10) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`7a5a22b`](https://github.com/mochify-js/driver-playwright/commit/7a5a22b14eb74e2c51af09ba0183aa42b13ab676)
  chore(deps-dev): bump mocha from 11.7.1 to 11.7.3 (#8) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`ff89ba2`](https://github.com/mochify-js/driver-playwright/commit/ff89ba2cd03019716922dc8e97ccc2d4dc04d8e9)
  chore(deps-dev): bump lint-staged from 16.1.5 to 16.2.3 (#9) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`36f56f2`](https://github.com/mochify-js/driver-playwright/commit/36f56f2d00f61b19113fd56929593430628a0d25)
  chore(deps-dev): bump eslint from 9.34.0 to 9.36.0 (#11) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`950e638`](https://github.com/mochify-js/driver-playwright/commit/950e63893d0598051c672160694bc63b4ee9d39a)
  chore(deps): bump playwright from 1.55.0 to 1.55.1 (#7) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`f2db827`](https://github.com/mochify-js/driver-playwright/commit/f2db827b5f28688a0d4c6b057c1c088f494e22d4)
  chore(deps): bump playwright from 1.54.2 to 1.55.0 (#6) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`e95a52b`](https://github.com/mochify-js/driver-playwright/commit/e95a52b5708c25b87a04c306ae28ad5a16f0c8d9)
  chore(deps-dev): bump eslint from 9.33.0 to 9.34.0 (#5) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

_Released by Yashar Fakhari on 2026-08-25._

## 1.0.2

- [`33ea2d7`](https://github.com/mochify-js/driver-playwright/commit/33ea2d7ffb125b7b962a7ec1435d5068db18756a)
  doc: update README.md (Yashar Fakhari)

_Released by Yashar Fakhari on 2025-08-16._

## 1.0.1

- [`35b478c`](https://github.com/mochify-js/driver-playwright/commit/35b478cf0bdfcebf2c6ac5971b05447c391ab6dd)
  doc: update README.md (Yashar Fakhari)

_Released by Yashar Fakhari on 2025-08-16._

## 1.0.0

- [`900e815`](https://github.com/mochify-js/driver-playwright/commit/900e8152ad25bd65fe0efe70f5fe88fda2d18392)
  ci: add c8 code coverage and Dependabot configs (#4) (Yashar Fakhari)
- [`92c69e9`](https://github.com/mochify-js/driver-playwright/commit/92c69e938c74d1f316d74b6b6c5bde0aa1549484)
  doc: update readme.md (Yashar Fakhari)
- [`9f57797`](https://github.com/mochify-js/driver-playwright/commit/9f57797535552e46198776705ddae6b8fe8f4f99)
  chore: update dependencies (Yashar Fakhari)

_Released by Yashar Fakhari on 2025-08-16._

## 0.3.2

- [`28bc662`](https://github.com/mochify-js/driver-playwright/commit/28bc6623bd839678356097f07eaf3ac9335b36d3)
  Add mochify v0.4.0 and v0.5.0 as peer

_Released by [Maximilian Antoni](https://github.com/mantoni) on 2023-12-27._

## 0.3.1

- [`27074e4`](https://github.com/mochify-js/driver-playwright/commit/27074e41029cb0ee44cd45fac3c7b79c1bc49f67)
  Add mochify v0.5.0 as peer
- [`05a1365`](https://github.com/mochify-js/driver-playwright/commit/05a13654db8f1d800a8df267d70493607b54742b)
  Remove --workspace flag from changes

_Released by [Maximilian Antoni](https://github.com/mantoni) on 2023-12-27._

## 0.3.0

- Initial release

_Released by [Maximilian Antoni](https://github.com/mantoni) on 2023-12-24._

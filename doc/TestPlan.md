Preparation
===========

**Nodes on jungle test net**

1.  setup node v44444444444

2.  setup node quaremachina

3.  setup node volentixtst5

4.  setup node vltxtknaudit

5.  setup node vtx222222222

**Create accounts**

1.  create v11111111111, v222222222222, v33333333333, v55555555555

**Other preparatory actions**

1.  Mint 2 test pools of 100000.00000000 ERC-777 VTX on Ropsten

2.  Deploy TVTX token contracts on v11111111111

3.  Deploy custodian on v22222222222

4.  set v22222222222 permissions for v11111111111

5.  Issue token pool v33333333333

6.  Initialize v22222222222 *currentbal*

7.  Clear v22222222222 *balances* buffer

8.  register nodes to v22222222222\

Tests
=====

1.  **Amount test**\
    All nodes send same amount.

    1.  amount upper/lower bounds: concordant balance

    2.  amount format

2.  **Buffer test**\

    1.  Nodes all send different amounts

    2.  2/3 Nodes send same amount

    3.  Flooding/DDos

3.  **Registration test**\

4.  **Unregistration test**\

5.  **Persistence test**\

    1.  Message to network less than 8 nodes with pesistency

    2.  Iterate through 16 nodes and shut 8 down

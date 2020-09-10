Preparation
===========

**Nodes on jungle test net** 8 nodes

1.  v44444444444

2.  quaremachina

3.  volentixtst5

4.  vltxtknaudit

5.  x111111111111

6.  x22222222222

7.  x33333333333

8.  vtx222222222

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

**Docker network**\

1.  eos wallet

2.  open ethereum

3.  oracle

Tests
=====

1.  **Precision test**\
    All nodes send same amount.

    1.  amount upper/lower bounds: concordant balance

    2.  amount format

2.  **Buffer test**\

    1.  Nodes all send different amounts

    2.  2/3 Nodes send same amount

    3.  Flooding/DDos

3.  **Registration test**DONE\

4.  **Unregistration test**DONE\

5.  **EOS bandwidth test**\

6.  **Persistency test**IN PROGRESS\

    1.  uptime

    2.  Message to network less than 8 nodes with pesistency

    3.  Iterate through 16 nodes and shut 8 down

    4.  Manage if provider is not available.

    5.  Test values from providers

7.  **Out of ressouces test**\

    1.  CPU DONE

    2.  Memory

    3.  BW

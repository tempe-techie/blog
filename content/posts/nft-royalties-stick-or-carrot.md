---
title: "NFT royalties: Instead of a stick, use a carrot"
date: 2023-01-15T09:23:42
draft: false
---

### Stick

In 2022, [OpenSea introduced a solution](https://decrypt.co/113698/opensea-breaks-silence-on-nft-royalties-but-creators-dont-like-what-they-hear) to "encourage" NFT marketplaces to charge royalty fees. Any marketplace that would not comply, would get blacklisted. In the carrot-stick terms, this is the "stick" approach.

The way OpenSea's solution works is by requiring NFT contracts to include a [significant amount of extra code](https://github.com/ProjectOpenSea/operator-filter-registry/tree/main/src) for enforcing royalties. 

This leads to a larger codebase, higher gas costs, and the potential for bugs as the code is relatively new and hasn't been time-tested. Additionally, existing non-upgradable NFTs cannot include these changes to their code.

### Carrot

Instead of the stick approach, we should consider the carrot approach. 

One good step in that direction is Gabe Leydon's [Limit Break](https://medium.com/limit-break/introducing-opt-in-programmable-royalties-and-more-through-staking-by-limit-break-3a166e3749e3), which incentivizes the use of royalty-friendly marketplaces by sharing future royalties with previous token holders.

New NFTs can easily implement Limit Break's code, and existing NFTs can gain these new features through staking and wrapping. 

However, wrapping an NFT is not a feasible solution for all collections, such as web3 domains.

Is there a way to encourage royalties without making changes to classic NFT codebases, such as OpenZeppelin's ERC-721 template?

### A single smart contract

There may be a solution where only a single smart contract is needed. For all NFTs and marketplaces.

This smart contract would do the following:

- Allow the NFT collection owner to set a royalty fee.
- Allow for royalties to be shared with previous NFT holders.
- Keep track of previous NFT holders.
- Keep a whitelist of royalty-compliant NFT marketplaces.

Only the whitelisted NFT marketplaces would be able to enter the address of a previous NFT holder to this joint smart contract once a trade has been done.

People would still be able to sell NFTs on exchanges that don't charge royalties, but in that case, they would not be entered into the joint smart contract as previous owners. 

This would incentivize people to trade on royalty-compliant marketplaces, but wouldn't prevent them from trading elsewhere (a carrot, not a stick).

This system wouldn't require any changes to existing or future NFT contracts' codebase. All it would require is a single smart contract, or a set of a few smart contracts to make it more modular and upgradeable.

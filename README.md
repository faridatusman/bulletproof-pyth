# Bulletproof Pyth: Marine Research Data Infrastructure

A decentralized, secure, and transparent platform for marine scientific data management, empowering researchers with blockchain-powered governance and access control.

## Overview

Bulletproof Pyth is an innovative blockchain solution that revolutionizes marine research data management by providing:
- Immutable and verifiable research metadata storage
- Decentralized access control and attribution mechanisms
- Community-driven governance model
- Flexible data sharing and monetization strategies
- Transparent and secure research ecosystem

Our platform bridges the gap between marine researchers, institutions, and the global scientific community by leveraging the power of blockchain technology.

## Architecture

The system is powered by a sophisticated smart contract that orchestrates:

```mermaid
graph TD
    A[Marine Researchers] -->|Register| B[Marine Registry Contract]
    B -->|Manages| C[Research Datasets]
    B -->|Controls| D[Access Permissions]
    B -->|Tracks| E[Scientific Citations]
    B -->|Enables| F[Collaborative Governance]
    C -->|Categorized As| G[Public/Premium/Restricted]
    H[Research Community] -->|Interact| C
    H -->|Participate| F
```

### Core Components:
- Researcher Validation Registry
- Comprehensive Dataset Management
- Granular Access Control
- Citation and Attribution Tracking
- Decentralized Governance Mechanism

## Contract Documentation

### marine-registry.clar

The core contract driving the Bulletproof Pyth platform's functionality.

#### Key Features:
- Rigorous researcher authentication
- Secure dataset metadata registration
- Multi-tiered access control (Public, Premium, Restricted)
- Comprehensive citation and credit system
- Democratic governance proposal framework

#### Access Levels:
- `ACCESS-LEVEL-PUBLIC` (u1): Open, freely accessible research data
- `ACCESS-LEVEL-PREMIUM` (u2): Requires economic contribution
- `ACCESS-LEVEL-RESTRICTED` (u3): Requires explicit authorization

## Getting Started

### Prerequisites
- Clarinet
- Stacks wallet for deployment/interaction

### Basic Usage

1. Register as a researcher:
```clarity
(contract-call? .ocean-vault register-researcher "John Doe" "Marine Institute" "PhD Marine Biology")
```

2. Register a dataset:
```clarity
(contract-call? .ocean-vault register-dataset 
    "dataset-001"
    "Coral Reef Survey 2023"
    "Environmental Data"
    "Great Barrier Reef"
    u1683849600
    "Standard sampling methodology"
    0x... ;; data hash
    u1    ;; open access
    u0    ;; free
)
```

3. Access a dataset:
```clarity
(contract-call? .ocean-vault check-dataset-access "dataset-001" tx-sender)
```

## Function Reference

### Public Functions

#### Researcher Management
- `register-researcher`: Register a new researcher
- `get-researcher`: Retrieve researcher information

#### Dataset Management
- `register-dataset`: Register a new dataset
- `verify-dataset`: Verify a dataset (admin only)
- `get-dataset`: Retrieve dataset information

#### Access Control
- `grant-dataset-access`: Grant access to permissioned dataset
- `access-paid-dataset`: Purchase access to paid dataset
- `check-dataset-access`: Check access permissions

#### Citations
- `cite-dataset`: Cite a dataset in research
- `get-citation`: Retrieve citation information

#### Governance
- `create-proposal`: Create a governance proposal
- `vote-on-proposal`: Vote on active proposals
- `finalize-proposal`: Finalize proposal after voting period

## Development

### Testing
1. Clone the repository
2. Install Clarinet
3. Run tests:
```bash
clarinet test
```

### Local Development
1. Start Clarinet console:
```bash
clarinet console
```
2. Deploy contracts:
```clarity
(contract-call? .ocean-vault ...)
```

## Security Considerations

### Access Control
- Only registered researchers can register datasets
- Dataset access is strictly controlled based on type
- Paid access requires successful STX transfer
- Permission grants only by dataset owners

### Governance
- Only registered researchers can participate
- Proposals have fixed voting periods
- Vote counting is transparent and immutable
- Status changes are permanent once finalized

### Limitations
- On-chain storage limited to metadata
- Actual dataset storage should be off-chain
- Access control applies to metadata only
- Citations must be by registered researchers
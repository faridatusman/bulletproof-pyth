import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v1.0.4/index.ts';
import { assertEquals } from 'https://deno.land/std@0.177.0/testing/asserts.ts';

Clarinet.test({
    name: "Ensure marine-registry contract initialization",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const deployer = accounts.get('deployer')!;
        
        // Sample test for contract initialization
        const block = chain.mineBlock([
            Tx.contractCall('marine-registry', 'get-proposal', [types.uint(1)], deployer.address)
        ]);

        assertEquals(block.height, 2);
        block.receipts[0].result.expectOk();
    }
});

Clarinet.test({
    name: "Validate access level restrictions",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const deployer = accounts.get('deployer')!;
        const wallet1 = accounts.get('wallet_1')!;

        // Test access control mechanism
        const block = chain.mineBlock([
            Tx.contractCall('marine-registry', 'access-paid-dataset', [types.ascii('test-dataset')], wallet1.address)
        ]);

        block.receipts[0].result.expectErr();
    }
});
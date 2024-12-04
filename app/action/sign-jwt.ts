"use server";

import { createSigner } from "fast-jwt";
import assert from "assert";

interface MagicRedeemTokenParams {
  userRefCode: string;
  userDisplayName: string;
  redeemCode: string;
}

const magicRedeemLinkOptions = {
  magicRedeemLinkPrivateKeyPath: "./resources/es-256-private.key",
  magicRedeemLinkPrivateKeyAlgorithm: "ES256" as const,
  magicRedeemLinkBaseUrl:
    "https://www.playboard.cloud/sample-service/magic-redeem",
  magicRedeemLinkAgeInMs: 600000,
};

let signTokenInitialized = false;
let signToken: (payload: object) => string = () => {
  throw new Error("signToken is not initialized");
};

function ensureSignTokenInitialized(): void {
  if (signTokenInitialized) return;

  assert(
    magicRedeemLinkOptions.magicRedeemLinkPrivateKeyPath,
    "magicRedeemLinkPrivateKeyPath is required"
  );
  assert(
    magicRedeemLinkOptions.magicRedeemLinkPrivateKeyAlgorithm,
    "magicRedeemLinkPrivateKeyAlgorithm is required"
  );
  assert(
    magicRedeemLinkOptions.magicRedeemLinkBaseUrl,
    "magicRedeemLinkBaseUrl is required"
  );
  assert(
    magicRedeemLinkOptions.magicRedeemLinkAgeInMs,
    "magicRedeemLinkAgeInMs is required"
  );

  signToken = createSigner({
    key: `-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgNRurWIAXCPE+iqau
N2X2qbB2ocBkuhT1hxAd+SOQZMehRANCAATG1DTYP3N3hierImXzgresZgnH1o7q
/dSzRaCtlcI0PEVUeELvVL6y1MYlVDVm7qUcsnR4bhrNvZXih71Us3Os\n-----END PRIVATE KEY-----`,
    algorithm: magicRedeemLinkOptions.magicRedeemLinkPrivateKeyAlgorithm,
    expiresIn: magicRedeemLinkOptions.magicRedeemLinkAgeInMs,
  });

  signTokenInitialized = true;
}

async function createPlayboardMagicRedeemToken(
  params: MagicRedeemTokenParams
): Promise<string> {
  ensureSignTokenInitialized();

  const { userRefCode, userDisplayName, redeemCode } = params;

  assert(userRefCode, "userRefCode is required");
  assert(userDisplayName, "userDisplayName is required");
  assert(redeemCode, "redeemCode is required");

  return signToken({ userRefCode, userDisplayName, redeemCode });
}

export async function createPlayboardMagicRedeemLinkUrl(
  params: MagicRedeemTokenParams
): Promise<string> {
  const token = await createPlayboardMagicRedeemToken(params);

  return `?token=${token}`;
}

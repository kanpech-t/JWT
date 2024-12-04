"use client";

import { createPlayboardMagicRedeemLinkUrl } from "./action/sign-jwt";
import { useState } from "react";

export default function Home() {
  const [baseUrl, setBaseUrl] = useState("");
  const [userRefCode, setUserRefCode] = useState("");
  const [userDisplayName, setUserDisplayName] = useState("");
  const [redeemCode, setRedeemCode] = useState("");
  const [redirectURL, setRedirctURL] = useState("");
  const [magicLink, setMagicLink] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    try {
      const link = await createPlayboardMagicRedeemLinkUrl({
        userRefCode,
        userDisplayName,
        redeemCode,
      });
      setMagicLink(
        baseUrl +
          link +
          (redirectURL !== "" ? `&redirectURL=${redirectURL}` : "")
      );
    } catch (error) {
      console.error("Error generating magic link:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="baseUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Base URL
          </label>
          <input
            type="text"
            id="baseUrl"
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            placeholder="Enter base URL"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="redirectURL"
            className="block text-sm font-medium text-gray-700"
          >
            redirectURL
          </label>
          <input
            type="text"
            id="redirectURL"
            value={baseUrl}
            onChange={(e) => setRedirctURL(e.target.value)}
            placeholder="Enter Redirect URL"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="userRefCode"
            className="block text-sm font-medium text-gray-700"
          >
            User Reference Code
          </label>
          <input
            type="text"
            id="userRefCode"
            value={userRefCode}
            onChange={(e) => setUserRefCode(e.target.value)}
            placeholder="Enter user reference code"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="userDisplayName"
            className="block text-sm font-medium text-gray-700"
          >
            User Display Name
          </label>
          <input
            type="text"
            id="userDisplayName"
            value={userDisplayName}
            onChange={(e) => setUserDisplayName(e.target.value)}
            placeholder="Enter user display name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="redeemCode"
            className="block text-sm font-medium text-gray-700"
          >
            Redeem Code
          </label>
          <input
            type="text"
            id="redeemCode"
            value={redeemCode}
            onChange={(e) => setRedeemCode(e.target.value)}
            placeholder="Enter redeem code"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
            isPending ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          {isPending ? "Generating..." : "Generate Magic Link"}
        </button>
      </form>

      {magicLink && (
        <div className="mt-4">
          <p>
            Magic Link:{" "}
            <a
              href={magicLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline"
            >
              {magicLink}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

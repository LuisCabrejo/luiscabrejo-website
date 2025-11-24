'use client';

import NexusChat from './NexusChat';

export default function NexusProvider() {
  return <NexusChat context="global" showPrompt={true} />;
}

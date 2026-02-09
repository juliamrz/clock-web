export interface MemoryInfo {
  used: number;   // kb
  total: number;  // kb
  free: number;   // kb
}

export const getMemoryInfo = (usedBytes: number, totalBytes: number): MemoryInfo => {
  const bytesToKb = (v: number) => parseFloat((v / 1024).toFixed(2));

  const used = bytesToKb(usedBytes);
  const total = bytesToKb(totalBytes);
  const free = bytesToKb(totalBytes - usedBytes);

  return { used, total, free };
};

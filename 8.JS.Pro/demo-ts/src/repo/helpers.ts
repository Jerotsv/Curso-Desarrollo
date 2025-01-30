export const readFromDisk = (file: string): string => {
    return 'readFromDisk: ' + file;
};

export const writeToDisk = (file: string, data: string): void => {
    console.log(data, file);
};

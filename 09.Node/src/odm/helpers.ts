export const readFromDisk = async (file: string): Promise<string> => {
    return 'readFromDisk: ' + file;
};

export const writeToDisk = async (
    file: string,
    data: string,
): Promise<void> => {
    console.log(data, file);
};

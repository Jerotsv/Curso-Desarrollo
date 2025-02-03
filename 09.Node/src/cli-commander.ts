import { program } from 'commander';

program.name('CLI').description('CLI sample').version('1.0.0');

program
    .command('all')
    .command('find <key>')
    .command('add <notes>')
    .command('update <id> <note>')
    .command('delete <id>');

program.parse();
